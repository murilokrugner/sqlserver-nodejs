/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBU010', {
    TBU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TBU_CODPLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBU_CODCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBU_DESCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    TBU_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TBU_FONE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TBU_FAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TBU_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TBU_ENDERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'TBU010'
  });
};
