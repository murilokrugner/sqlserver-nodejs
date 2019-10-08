/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DAI010', {
    DAI_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAI_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_SEQCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAI_SEQUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_PEDIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DAI_VENDED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_PESO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DAI_CAPVOL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DAI_PERCUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_ROTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_ROTEIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_SEQROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_NFISCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DAI_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DAI_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAI_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAI_CARORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_REMITO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DAI_SERREM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DAI_DTCHEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAI_CHEGAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DAI_TMSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    DAI_DTSAID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DAI_VALFRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DAI_FREAUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    DAI_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DAI_SDOCRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'DAI010'
  });
};
