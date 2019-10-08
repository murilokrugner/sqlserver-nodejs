/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TN3010', {
    TN3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN3_CODEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TN3_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TN3_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TN3_NUMCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TN3_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TN3_DURABI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TN3_INDEVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TN3_DTAVAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TN3_NUMCRF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TN3_NUMCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TN3_OBSAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TN3_TIPEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TN3_AREEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TN3_PERMAN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TN3_TPDURA: {
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
    TN3_DTVALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TN3_GENERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TN3010'
  });
};
