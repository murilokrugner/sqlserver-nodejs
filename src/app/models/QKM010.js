/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QKM010', {
    QKM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKM_PECA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    QKM_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKM_REVINV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QKM_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QKM_NOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QKM_NCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QKM_TECAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QKM_ESPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QKM_TAMO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QKM_FREQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    QKM_METCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QKM_PLREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    QKM_TPPRO: {
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
    tableName: 'QKM010'
  });
};
