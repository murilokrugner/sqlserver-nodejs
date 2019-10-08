/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TNY010', {
    TNY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNY_NUMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TNY_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_HRINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNY_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNY_GRPCID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TNY_CID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_EMITEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TNY_TIPAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNY_TIPATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNY_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    TNY_NATEST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TNY_DTCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_HRCONS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TNY_ENDERE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TNY_CODESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNY_CODABO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TNY_QTDIAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TNY_DTSAID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_DTALTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_DTSAI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_DTALT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_DTSAI3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_DTALT3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TNY_INDMED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNY_OCORRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TNY_ACIDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TNY_AFRAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TNY_ATEANT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TNY_CODAFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    TNY_QTDTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    TNY_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TNY_TPEFD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    tableName: 'TNY010'
  });
};
