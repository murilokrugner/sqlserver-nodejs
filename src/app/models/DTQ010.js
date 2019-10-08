/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DTQ010', {
    DTQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTQ_FILORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTQ_VIAGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTQ_TIPVIA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTQ_ROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTQ_DATGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTQ_HORGER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTQ_SERTMS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTQ_TIPTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTQ_DATFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTQ_HORFEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTQ_DATENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTQ_HORENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTQ_CODOBS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTQ_CODCAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTQ_FILATU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTQ_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTQ_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTQ_CUSTO1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTQ_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTQ_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTQ_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTQ_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTQ_QTDPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTQ_DATINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTQ_HORINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTQ_DATFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTQ_HORFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTQ_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTQ_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTQ_IDOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    DTQ_SERADI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTQ_IDCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    DTQ_PAGGFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DTQ_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTQ_TIPVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTQ_CDTPOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DTQ_CDCLFR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    DTQ_CDRDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTQ_RTAORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DTQ_UFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTQ_RTOORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DTQ_CDMUNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DTQ_CEPORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTQ_UFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DTQ_CDMUND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DTQ_CEPDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTQ_CHVEXT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    DTQ_KMVGE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTQ_CDRORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'DTQ010'
  });
};
