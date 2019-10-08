/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RD4010', {
    RD4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD4_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD4_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD4_EMPIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD4_FILIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RD4_CODIDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    RD4_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RD4_TREE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RD4_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                '
    },
    RD4_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RD4_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    }
  }, {
    tableName: 'RD4010'
  });
};
