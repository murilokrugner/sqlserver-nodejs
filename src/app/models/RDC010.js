/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RDC010', {
    RDC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RDC_CODAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDC_CODADO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDC_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDC_CODDOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDC_TIPOAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDC_DTIAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDC_DTFAVA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDC_CODTIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDC_CODNET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDC_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDC_DATENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDC_DTLIMR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDC_DATRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    RDC_CHKENV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDC_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDC_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RDC_IDENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    RDC_QTDCOB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RDC_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RDC_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    RDC_USRNAM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    RDC_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    tableName: 'RDC010'
  });
};
