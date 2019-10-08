/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNF010', {
    TNF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNF_CODEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TNF_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNF_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNF_NUMCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNF_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNF_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNF_HRENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNF_QTDENT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNF_QTDEVO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNF_MOTIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNF_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNF_INDDEV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNF_DTDEVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNF_TIPODV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNF_EPIEFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNF_DTRECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNF_DTMANU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNF_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNF_NUMSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNF_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNF_NUMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNF_ITEMSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNF_LOTECT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TNF_LOTESB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNF_ENDLOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TNF_NSERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TNF_DIGIT1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    TNF_DIGIT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
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
    TNF_LOCDV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNF_DEVBIO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TNF010'
  });
};
