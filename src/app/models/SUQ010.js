/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUQ010', {
    UQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UQ_SOLUCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UQ_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                       '
    },
    UQ_VALIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_CODRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UQ_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    UQ_GERFNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_WFTEMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UQ_REPLICA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_INTWOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_EVENTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_COMPART: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_COMPSU0: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    UQ_SELSU0: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    UQ_STATCH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_INTTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_TECOCOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UQ_TECCLAS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    UQ_GERAOS: {
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
    },
    UQ_REPLDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_STREP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_ACAOTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UQ_OPORTU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UQ_USUCRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SUQ010'
  });
};
